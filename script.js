document.querySelector('form').addEventListener('submit',event=>event.preventDefault());
document.querySelector('#demo-submit').addEventListener('click',()=>{
  const form=document.querySelector('form');
  if(!form.reportValidity()) return;
  document.querySelector('#form-status').textContent='入力内容を確認しました。デモのため送信されていません。お問い合わせはInstagramのDMをご利用ください。';
});
document.querySelectorAll('a[aria-disabled="true"]').forEach(link=>link.addEventListener('click',event=>event.preventDefault()));
