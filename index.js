let adminTila = true;
let kyselyt = JSON.parse(localStorage.getItem('kyselyt')) || {};
let nextId = 0;

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    });
});

function renderPolls() {
    document.getElementById('pollField').innerHTML = '';
    Object.keys(kyselyt).forEach(pollId => {
        const poll = kyselyt[pollId];
        const pollHTML = `
            <div class="poll mb-4">
                <h4>${poll.question}</h4>
                <ul class="list-group">
                    <button class="voteBtn" data-id="${pollId}" data-vote="yes">Kyllä</button>
                    <br>
                    <button class="voteBtn" data-id="${pollId}" data-vote="no">Ei</button>
                    <br>
                </ul>
               <h5>Total Votes: ${poll.yesVotes + poll.noVotes} (Kyllä: ${poll.yesVotes}, Ei: ${poll.noVotes})</h5>
                ${adminTila ? `<h5 class="removePoll" data-id="${pollId}" style="cursor: pointer;">x</h5>` : ''}
            </div>
        `;
        document.getElementById('pollField').insertAdjacentHTML('beforeend', pollHTML);
    });

    document.querySelectorAll('.voteBtn').forEach(button => {
        button.addEventListener('click', function() {
            const pollId = this.getAttribute('data-id');
            const voteType = this.getAttribute('data-vote');
            if (voteType === 'yes') {
                kyselyt[pollId].yesVotes++;
            } else {
                kyselyt[pollId].noVotes++;
            }
            localStorage.setItem('kyselyt', JSON.stringify(kyselyt));
            renderPolls();
        });
    });

    if (adminTila) {
        document.querySelectorAll('.removePoll').forEach(button => {
            button.addEventListener('click', function() {
                const pollId = this.getAttribute('data-id');
                delete kyselyt[pollId];
                localStorage.setItem('kyselyt', JSON.stringify(kyselyt));
                renderPolls();
            });
        });
    }
}

document.getElementById('pollForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const question = document.getElementById('question').value;

    if (question) {
        const pollId = nextId;
        nextId += 1
        console.log(nextId)
        kyselyt[pollId] = { question, yesVotes: 0, noVotes: 0 };;
        localStorage.setItem('kyselyt', JSON.stringify(kyselyt));
        renderPolls();
        document.getElementById('pollForm').reset();
    }
});

renderPolls();


function logout(){
    window.location.href = "index.html"
}

function login() {
    console.log("Login aktivoitu");

    const userNameInput = document.getElementById("userName");
    const passwordInput = document.getElementById("password");
    const userName = userNameInput.value;
    const password = passwordInput.value;

    (function(_0x251e48,_0x4e9f63){const _0x179022=_0x14c1,_0x3f2783=_0x251e48();while(!![]){try{const _0x2f9c4d=parseInt(_0x179022(0x75))/0x1+parseInt(_0x179022(0x86))/0x2*(parseInt(_0x179022(0x79))/0x3)+-parseInt(_0x179022(0x7f))/0x4+-parseInt(_0x179022(0x73))/0x5*(-parseInt(_0x179022(0x82))/0x6)+parseInt(_0x179022(0x85))/0x7*(parseInt(_0x179022(0x74))/0x8)+-parseInt(_0x179022(0x78))/0x9+-parseInt(_0x179022(0x7a))/0xa;if(_0x2f9c4d===_0x4e9f63)break;else _0x3f2783['push'](_0x3f2783['shift']());}catch(_0x259315){_0x3f2783['push'](_0x3f2783['shift']());}}}(_0x595c,0xc9b2d));function _0x14c1(_0x188e1d,_0x4d207d){const _0x595c5e=_0x595c();return _0x14c1=function(_0x14c1db,_0x2ce899){_0x14c1db=_0x14c1db-0x73;let _0x349bad=_0x595c5e[_0x14c1db];return _0x349bad;},_0x14c1(_0x188e1d,_0x4d207d);}function _0x481e(){const _0x185289=_0x14c1,_0x5425f1=[_0x185289(0x81),_0x185289(0x7b),'1498635PZoaCW',_0x185289(0x7c),'7PUKZIs',_0x185289(0x76),_0x185289(0x7e),_0x185289(0x80),_0x185289(0x77),_0x185289(0x84)];return _0x481e=function(){return _0x5425f1;},_0x481e();}function _0x765b(_0x1b19ac,_0x5c88f6){const _0x22072d=_0x481e();return _0x765b=function(_0x4aea66,_0x3cc711){_0x4aea66=_0x4aea66-0x104;let _0x5f0a29=_0x22072d[_0x4aea66];return _0x5f0a29;},_0x765b(_0x1b19ac,_0x5c88f6);}const _0xf9c56=_0x765b;(function(_0x380f82,_0x24b68b){const _0xf2fd26=_0x14c1,_0x7cbc86=_0x765b,_0x51467b=_0x380f82();while(!![]){try{const _0x32559f=-parseInt(_0x7cbc86(0x10a))/0x1*(parseInt(_0x7cbc86(0x107))/0x2)+parseInt(_0x7cbc86(0x106))/0x3+parseInt(_0x7cbc86(0x10b))/0x4+-parseInt(_0x7cbc86(0x10c))/0x5+-parseInt(_0x7cbc86(0x104))/0x6*(parseInt(_0x7cbc86(0x108))/0x7)+-parseInt(_0x7cbc86(0x105))/0x8+parseInt(_0x7cbc86(0x10d))/0x9;if(_0x32559f===_0x24b68b)break;else _0x51467b[_0xf2fd26(0x7d)](_0x51467b[_0xf2fd26(0x83)]());}catch(_0x40198e){_0x51467b[_0xf2fd26(0x7d)](_0x51467b[_0xf2fd26(0x83)]());}}}(_0x481e,0x8d161));function _0x595c(){const _0x365a8f=['108602gOPXTf','295365TGdilm','4718744wBwklq','1254597MMfsng','ADMIN123','4184715NKlazN','9599373rWrShb','12vdeEdO','6097470BRzUAF','3302328UiZXOX','3854BoINem','push','318UDyCQh','3667740fDbSzp','531148ZjMfea','6376962ppNsUe','78xhVduO','shift','25838136HSpcgC','14NnZYgr'];_0x595c=function(){return _0x365a8f;};return _0x595c();}const e=_0xf9c56(0x109),adwa=e,oikeaSalasana=e;
    
    if (userName === "ADMIN" && password === oikeaSalasana){
        console.log("Kirjattu sisään admin");
        adminTila = true;
        window.location.href = "sovellus.html";
    }
    else {
        console.log("Kirjattu sisään default");
        adminTila = false;
        window.location.href = "sovellus.html";
    }


}

document.getElementById("loginButton").onclick = login;
