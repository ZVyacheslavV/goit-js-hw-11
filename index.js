import{a as i,i as c,S as u}from"./assets/vendor-w2JwYdZo.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",y="51625695-85db02b03381982e3fb3bbea7",f=o=>i.get(d,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:r})=>!r.hits||r.hits.length===0?(c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),null):r.hits).catch(r=>(console.log(r),null)),l={searchForm:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery")},g=o=>{const r=o.map(({webformatURL:a,largeImageURL:e,tags:t})=>`<li class="gallery-item">
            <a class="gallery-link" href="${e}">
              <img
                class="gallery-image"
                src="${a}"
                alt="${t}"
              />
            </a>
          </li>`).join(`
`);l.gallery.innerHTML=r,new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()},h=()=>{l.loader.classList.remove("hidden")},m=()=>{l.loader.classList.add("hidden")},p=()=>{l.gallery.innerHTML='<ul class="gallery"></ul>'};console.log("listener attached");l.searchForm.addEventListener("submit",o=>{o.preventDefault(),p();const r=o.target.elements["search-text"].value.trim();r&&(h(),f(r).then(s=>{s&&(g(s),console.log(s))}).catch().finally(()=>{m(),o.target.reset()}))},{once:!0});
//# sourceMappingURL=index.js.map
