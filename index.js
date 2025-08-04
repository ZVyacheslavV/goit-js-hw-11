import{a as m,i as f,S as g}from"./assets/vendor-w2JwYdZo.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",d="51625695-85db02b03381982e3fb3bbea7",y=l=>m.get(p,{params:{key:d,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:t})=>!t.hits||t.hits.length===0?(f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),null):t.hits).catch(t=>(console.log(t),null)),o={searchForm:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery")},h=l=>{const t=l.map(({webformatURL:a,largeImageURL:e,tags:r,likes:i,views:n,comments:c,downloads:u})=>`<li class="gallery-item">
            <a
              class="gallery-link"
              href="${e}"
            >
              <img
                class="gallery-image"
                src="${a}"
                alt="${r}"
              />

              <ul class="img-info">
                <li>
                  <p class="img-info-title">Likes</p>
                  <p class="img-info-value">${i}</p>
                </li>
                <li>
                  <p class="img-info-title">Views</p>
                  <p class="img-info-value">${n}</p>
                </li>
                <li>
                  <p class="img-info-title">Comments</p>
                  <p class="img-info-value">${c}</p>
                </li>
                <li>
                  <p class="img-info-title">Downloads</p>
                  <p class="img-info-value">${u}</p>
                </li>
              </ul>
            </a>
          </li>`).join(`
`);o.gallery.innerHTML=t,new g(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()},L=()=>{o.loader.classList.remove("hidden")},b=()=>{o.loader.classList.add("hidden")},v=()=>{o.gallery.innerHTML='<ul class="gallery"></ul>'};o.searchForm.addEventListener("submit",l=>{l.preventDefault(),v();const t=l.target.elements["search-text"].value.trim();t&&(L(),y(t).then(s=>{s&&h(s)}).catch(s=>console.log(s)).finally(()=>{b(),l.target.reset()}))});
//# sourceMappingURL=index.js.map
