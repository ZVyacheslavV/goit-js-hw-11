import{a as n,i as c,S as u}from"./assets/vendor-w2JwYdZo.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",y="51625695-85db02b03381982e3fb3bbea7",g=o=>n.get(d,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:r})=>!r.hits||r.hits.length===0?(c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),[]):r.hits).catch(r=>(console.log(r),[])),f=o=>{const r=o.map(({webformatURL:l,largeImageURL:e,tags:t})=>`<li class="gallery-item">
            <a class="gallery-link" href="${e}">
              <img
                class="gallery-image"
                src="${l}"
                alt="${t}"
              />
            </a>
          </li>`).join(`
`);a.gallery.innerHTML=r,new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()},h=()=>{a.loader.classList.remove("hidden")},m=()=>{a.loader.classList.add("hidden")},p=()=>{a.gallery.innerHTML='<ul class="gallery"></ul>'},a={searchForm:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery")};a.searchForm.addEventListener("submit",o=>{o.preventDefault(),p();const r=o.target.elements["search-text"].value.trim();r&&(h(),g(r).then(s=>{f(s),console.log(s)}).catch().finally(()=>{m(),o.target.reset()}))});
//# sourceMappingURL=index.js.map
