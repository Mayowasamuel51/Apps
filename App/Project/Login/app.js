


const username = ['mayowa', 'james', 'bisi'];
const email = ['a@gmail.com', 'pick@gamil.com', 'we@gmail.com']

const add_btn = document.querySelector('.add');

function Check() {
    const input_1 = document.querySelector('.username').value;
    const input_2 = document.querySelector('.email').value;;
    let li = document.createElement('li');
    let ul = document.querySelector('.ul')

    if (input_1 === '' || input_2 === '') {
        li.innerHTML = "<h4 class='text-warning'>Empty input please </h4> ";
        ul.append(li)
    }
    else if (input_1 == username[0] && input_2 == email[0]) {
        li.innerHTML = `<h4 class='text-success'> Welcome back  ${input_1}  ${input_2}   </h4>`
        ul.append(li)
    }
    else if (input_1 == username[1] && input_2 == email[1]) {
        console.log(`${input_1} ${input_2}`)
    }
    else {
        li.innerHTML = `<h4 class='text-danger'> This User   ${input_1}  ${input_2} Does not exist    </h4>`
        ul.append(li)
    }
}




add_btn.addEventListener('click', Check)