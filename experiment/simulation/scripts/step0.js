let lottie1 = bodymovin.loadAnimation({
    container: document.querySelector('#step-1 .step1-tools'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'https://assets7.lottiefiles.com/packages/lf20_Yy27Vg.json'
});

var currentSegment1 = 1;
var task_done1 = false;
var task_done2 = false;

function playSegments1() {
    if (!task_done1) {
        if (currentSegment1 == 1) {
            lottie1.playSegments([0, 180], true);
            
            gsap.to('#step-1 .step1-tools .element', {opacity: 0});
            gsap.to('#step-1 .step1-tools .element', {delay: 6, opacity: 1, onComplete: () => {
                currentSegment1++;
            }});
        }
        else if (currentSegment1 == 2) {
            lottie1.playSegments([180, 508], true);
            
            gsap.to('#step-1 .step1-tools .element', {opacity: 0});
            gsap.to('#step-1 .step1-tools .element', {delay: 6, opacity: 0, onComplete: () => {
                task_done1 = true;
                addTask('Step1: Gather glassware and instruments required');
                // Proceed to Step 2 once Step 1 is completed
                playSegments2();
            }});
        }
    }
}

function playSegments2() {
    if (!task_done2) {
        if (currentSegment2 == 1) {
            lottie2.playSegments([0, 180], true);
            
            gsap.to('#step-2 .control-1', {opacity: 0});
            gsap.to('#step-2 .control-2', {delay: 6, opacity: 1, onComplete: () => {
                currentSegment2++;
            }});
        }
        else if (currentSegment2 == 2) {
            lottie2.playSegments([180, 508], true);
            
            gsap.to('#step-2 .control-2', {opacity: 0});
            gsap.to('#step-2 .control-2', {delay: 6, opacity: 0, onComplete: () => {
                task_done2 = true;
                addTask('Step2: Take 5 ml of standard ascorbic acid solution in the conical flask');
            }});
        }
    }
}

function addTask(taskDescription) {
    var tasksList = document.getElementById('taskslist');
    var taskItem = document.createElement('li');
    taskItem.textContent = taskDescription;
    tasksList.appendChild(taskItem);
}

// Example initialization call for Step 1
playSegments1();
