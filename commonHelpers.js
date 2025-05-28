import{i as a,S as c}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function p(s,o){o.innerHTML="",s.forEach(t=>{const n=`<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
  </a>
   <div class="image-details">
                    <p>Likes: ${t.likes}</p>
                    <p>Views: ${t.views}</p>
                    <p>Comments: ${t.comments}</p>
                    <p>Downloads: ${t.downloads}</p>
                </div>
</li>`;o.innerHTML+=n})}function u(s){const o="https://pixabay.com",t="/api/",e={key:"42473216-758414b66288a27fb7f33990e",image_type:"photo",orientation:"horizontal",safesearch:"true",q:s},r=`${o}${t}?${new URLSearchParams(e)}`;return fetch(r).then(i=>i.json())}const f=document.querySelector(".js-search-form"),m=document.querySelector(".gallery"),l=document.querySelector(".loader");f.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements.search.value.trim();if(!o)return a.warning({title:"Warning",message:"Wpisz zapytanie",position:"topCenter"});l.style.display="inline-block",u(o).then(t=>{l.style.display="none",t.hits.length===0?a.error({title:"Error",message:" Wybacz, nie ma nic na podany temat, sprobuj ponownie",position:"topCenter"}):(p(t.hits,m),new c(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh())}).catch(t=>{l.style.display="none",a.error({title:"Error",message:"There was a problem with the fetch operation. Please try again later.",position:"topCenter"}),s.target.reset()})});
//# sourceMappingURL=commonHelpers.js.map
