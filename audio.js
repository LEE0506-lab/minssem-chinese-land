(() => {
  'use strict';
  const synth = window.speechSynthesis;
  let pending = null, active = null, timer = null, selected = null;
  const msg = (ko,en) => localStorage.getItem('minssem-language') === 'en' ? en : ko;
  const ready = () => msg('발음 듣기','Listen');
  function voices() {
    const list = synth ? synth.getVoices() : [];
    return list.filter(v => /^zh[-_]cn$/i.test(v.lang));
  }
  function preferred() { return voices().find(v => /google/i.test(v.name)); }
  function setNote(note,text) { if(note) note.textContent=text; }
  function stop() {
    clearTimeout(timer); timer=null;
    if(pending) setNote(pending.note,ready());
    if(active) setNote(active.note,ready());
    pending=null; active=null;
    if(synth) synth.cancel();
  }
  function play(voice) {
    if(!pending || !voice) return;
    clearTimeout(timer); timer=null;
    const job=pending; pending=null; selected=voice;
    const u=new SpeechSynthesisUtterance(job.text);
    u.voice=voice; u.lang=voice.lang; u.rate=0.82; u.pitch=1;
    active={...job,u};
    u.onstart=()=>{if(active?.u===u) setNote(job.note,msg('발음 재생 중...','Playing...'));};
    u.onend=()=>{if(active?.u===u){active=null;setNote(job.note,ready());job.onDone?.(true);}};
    u.onerror=e=>{if(active?.u===u){active=null;setNote(job.note,['canceled','interrupted'].includes(e.error)?ready():msg('발음을 재생할 수 없어요.','Unable to play pronunciation.'));job.onDone?.(false);}};
    synth.speak(u);
  }
  function refresh(){const v=preferred();if(pending && v) play(v);}
  window.stopSpeech=stop;
  window.speakChinese=(text,note,onDone)=>{
    stop();
    if(!synth || !window.SpeechSynthesisUtterance){setNote(note,msg('음성을 지원하지 않는 브라우저예요.','Speech is not supported.'));onDone?.(false);return;}
    pending={text,note,onDone};
    const v=selected || preferred();
    if(v){play(v);return;}
    setNote(note,msg('음성 준비 중...','Loading voice...'));
    timer=setTimeout(()=>{
      if(!pending)return;
      const fallback=preferred() || voices()[0];
      if(fallback){play(fallback);return;}
      const message=msg('중국어 음성이 준비되지 않았어요. 다시 눌러 주세요.','Chinese voice is not ready. Please try again.');
      if(pending.note)setNote(pending.note,message);else window.alert(message);
      const failed=pending;pending=null;failed.onDone?.(false);
    },3500);
  };
  if(synth){synth.addEventListener('voiceschanged',refresh);synth.getVoices();window.addEventListener('pagehide',stop);}
})();
