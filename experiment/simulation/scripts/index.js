var curent_step = 0

var task_done = true
var sidebarToggle = false

var steps = document.querySelectorAll('.step')
var controls = document.querySelector('#controls')
var taskslist = document.querySelector('#taskslist')

function toggleSidebar() {
    if(!sidebarToggle) {
        gsap.to('#sidebar', {
            right: 0
        })

        sidebarToggle = true
    } else {
        gsap.to('#sidebar', {
            right: -500
        })

        sidebarToggle = false
    }
}

function next() {
    if (curent_step < steps.length - 1) {
        curent_step++;
        if (!steps[curent_step].classList.contains('step-title')) {
            task_done = false;

        } 
        if(curent_step ==6){
            addTask('step 4: Calculation of Dye factor');
        }
        if (curent_step === 14) { // Assuming step-11 is the 12th step (index 11)
            addTask('step 11: Calculation and Result');
        } 
        if (curent_step === 15) { // Assuming step-11 is the 12th step (index 11)
            addTask('step 12 : Inference');
        }
        else if (curent_step === 12) { 
            // Display step-13
            document.querySelector('#step-13').classList.add('active');
        }
        
        else {
            // Add the task heading to the taskslist element
            const tasksList = document.getElementById('taskslist');
            if (tasksList) {
                // Check if the heading already exists to avoid duplicates
                if (!tasksList.querySelector('.task-heading')) {
                    const heading = document.createElement('h3');
                    heading.classList.add('task-heading');
                    heading.textContent = 'Step 0: Glassware & chemical reagents required ';
                    tasksList.appendChild(heading);
                }
            }
        }
    }
}




function previous() {
    if (curent_step > 0) {
        curent_step--
        if(!steps[curent_step].classList.contains('step-title'))
            task_done = false
    }
}

function addTask(task) {
    var taskli = document.createElement('li')
    taskli.innerHTML = task

    taskslist.appendChild(taskli)
}

setInterval(() => {
    steps = document.querySelectorAll('.step')

    for (let i = 0; i < steps.length; i++) {
        if (i == curent_step)
            steps[i].classList.add('active')
        else
            steps[i].classList.remove('active')
    }

    if (task_done)
        controls.classList.add('active')
    else
        controls.classList.remove('active')

}, 100)

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
}

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

var beep = new sound('assets/sounds/beep.wav')
var humming = new sound('assets/sounds/humming.wav')
var hydrolics = new sound('assets/sounds/hydrolics.mp3')
var juicerSound = new sound('assets/sounds/juicer.wav')
