
function init() {

  // setPageText(getIndex());

  setTitleNavigation("Works");
}

function getIndex() {
  console.log(localStorage.getItem("index"));
  return parseInt(localStorage.getItem("index"));
}

// JSON에서 자료를 읽어와서 페이지에 배치
function setPageText(idx) {
  const indexData = myData[idx];

  var title = document.querySelector(".contents.title");
  var h_period = document.querySelector(".period.holder-desc");
  var h_member = document.querySelector(".team.holder-desc");
  var h_abstract = document.querySelector(".abstract.holder-desc");
  var b_job = document.querySelector(".job.holder-desc");
  var b_usage_container = document.querySelector(".usage.holder-title");
  var b_method = document.querySelector(".method.holder-desc");
  var r_rate = document.querySelector(".rate.holder-desc");
  var r_earned = document.querySelector(".earned.holder-desc");

  title.innerHTML = indexData.title;
  h_period.innerHTML = indexData.proj_head.period;
  h_member.innerHTML = indexData.proj_head.team;
  h_abstract.innerHTML = indexData.proj_head.abstract;
  b_job.innerHTML = indexData.proj_body.my_job;
  
  for (var i = 0; i < indexData.proj_body.usage.length; i++) {
    //TODO: holder를 사용기술 갯수만큼 만들고 데이터 넣기
    var u_container = document.createElement("span");
    var u_thumb = document.createElement("div");
    var u_desc = document.createElement("div");
    
    b_usage_container.appendChild(u_container);
    u_container.appendChild(u_thumb);
    u_container.appendChild(u_desc);
    
    u_container.classList.add("usage", "holder-desc")
    u_thumb.classList.add("tech-item", "thumb");
    u_desc.classList.add("tech-item", "desc");


    for (const [k, v] of Object.entries(indexData.proj_body.usage[i])) {
      u_desc.innerHTML = v;
    }
  }

  b_method.innerHTML = indexData.proj_body.method;
  r_rate.innerHTML = indexData.proj_result.rate;
  r_earned.innerHTML = indexData.proj_result.earned;

}


function setThumb(idx) {
  //사용한 기술의 썸네일 배치
  //JSON에서 key 값을 가져오는 방법?
  var thumb = Object.getOwnPropertyNames(myData[idx].proj_body.usage[0]);
  console.log(thumb);
}

// INIT FUNCTION
init();