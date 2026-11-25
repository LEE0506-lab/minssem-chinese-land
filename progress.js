/* STEP 03-1: read-only assessment progress. No local storage or writes. */
(function (root) {
  'use strict';
  function summarize(rows, {course = 'hsk1', lessonCount = 15, userId} = {}) {
    if (!userId || !Number.isInteger(lessonCount) || lessonCount < 1) throw new Error('Invalid progress scope');
    const stars = Array(lessonCount).fill(0);
    for (const row of rows) {
      if (row.user_id !== userId || row.course !== course) continue;
      const n = row.lesson_number, s = row.stars;
      if (!Number.isInteger(n) || n < 1 || n > lessonCount || !Number.isInteger(s) || s < 0 || s > 3) throw new Error('Invalid assessment progress row');
      stars[n-1] = Math.max(stars[n-1], s);
    }
    function range(start=1,end=lessonCount) {
      if (!Number.isInteger(start)||!Number.isInteger(end)||start<1||end>lessonCount||start>end) throw new Error('Invalid lesson range');
      const values=stars.slice(start-1,end);
      return Object.freeze({completed:values.filter(s=>s>0).length,stars:values.reduce((a,b)=>a+b,0),lessonCount:values.length,maxStars:values.length*3});
    }
    return Object.freeze({course,userId,...range(),stars:Object.freeze(stars),totalStars:range().stars,range,
      isLessonUnlocked(n,{admin=false}={}) { return Number.isInteger(n)&&n>=1&&n<=lessonCount&&(admin===true||n===1||stars.slice(0,n-1).every(s=>s>0)); }});
  }
  async function load({userId,course='hsk1',lessonCount=15}={}) {
    const client=root.MinssemBackend.client;
    const {data,error}=await root.MinssemAuth.getUser();
    if(error||!data?.user) throw error||new Error('Login required');
    const target=userId||data.user.id;
    if(target!==data.user.id){const p=await root.MinssemAuth.getProfile(data.user.id);if(p.error||!root.MinssemAuth.isAdmin(p.data))throw p.error||new Error('Access denied');}
    const rows=[];
    for(let offset=0;;offset+=500){const result=await client.from('lesson_progress').select('user_id,course,lesson_number,stars').eq('user_id',target).eq('course',course).order('lesson_number').range(offset,offset+499);if(result.error)throw result.error;if(!Array.isArray(result.data))throw new Error('Missing progress data');rows.push(...result.data);if(result.data.length<500)break;}
    return summarize(rows,{userId:target,course,lessonCount});
  }
  root.MinssemProgress=Object.freeze({load,summarize});
})(window);
