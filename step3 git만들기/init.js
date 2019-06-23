const repository = require('./gitRepository');
const shellPrompt = require('./shellPrompt');

const init = function (order) {
    const name = order.slice(5);
    repository[name] = {};
    console.log(`created ${name} repository`);
}


const status = function (order) {
    const name = order.slice(13);
    if (name.length === 0) {
        console.log(Object.keys(repository));
    } else if(repository[name] !== undefined){
        const fileArr = Object.entries(repository[name]);
        console.log(fileArr);
    } else {
        console.log(`there is no ${name} repository`);
    }
}
// console.log(repository['hello'])

const checkout = function (order) {
    const name = order.slice(9);
    if (name.length === 0) {
        shellPrompt.r.setPrompt('/>');
    } else {
        shellPrompt.r.setPrompt('안녕하세요')
    }
}
// console.log(checkout('checkout hello'))

module.exports = {
    init,
    status,
    checkout
}

// 가상으로 git 동작을 확인하는 프로그램 명령 vmgit을 작성한다.
// vmgit을 시작하면 셀 프롬프트와 비슷하게 명령을 입력받는다.

// init <repository_name> 명령을 사용하면 local 영역에 <repository_name> 이름으로 저장소 공간을 생성한다.

// status local <repository_name> 명령을 사용하면 local에 있는 <repository_name> 저장소 내부 파일 상태를 출력한다.

// 만약 저장소 이름이 없으면 전체 저장소 목록을 출력한다.
// checkout <repository_name> 명령을 사용하면 해당 저장소를 선택한 것을 표시하기 위해서 프롬프트 뒤에 <repository_name> 저장소 이름을 붙여서 출력한다.

// 만약 저장소 이름이 없으면 아무런 저장소를 선택하지 않은 상태로 초기 상태와 동일하게 표시한다.
