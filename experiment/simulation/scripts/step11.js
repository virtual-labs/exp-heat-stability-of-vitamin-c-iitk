var currentSegment11 = 1;

var j1results = [3.40, 42, 46, 48]
var j2results = [3.0, 36, 38, 42]
var j3results = [2.2, 24, 24, 28]
var j4results = [1.4, 18, 18, 20]


// var j1results = [3.4, 3.0, 2.2, 1.4]; // Corresponds to Apple juice J1, J2, J3, J4 ranges: 3.2-3.6, 2.8-3.2, 2.0-2.4, 1.2-1.6
// var j2results = [42, 36, 34, 19];    // Corresponds to Mosambi juice J1, J2, J3, J4 ranges: 40-44, 34-38, 22-26, 16-20
// var j3results = [46, 38, 24, 20];    // Corresponds to Lemon juice J1, J2, J3, J4 ranges: 44-48, 36-40, 22-26, 16-20
// var j4results = [48, 42, 28, 20]; 

var dropScale = [0.2, 2, 2, 2]

var currentValue11 = 0
var handle = null


var canTitrate = false

// Remove these in final build
//task_done = false
//var selectedSample = 0
//var dyeFactor = 0.08
let resultFinalJ1, resultFinalJ2, resultFinalJ3, resultFinalJ4;

function platySegments11() {
    if (!task_done) {
        if (currentSegment11 == 1) {
            lottie11.playSegments([0, 118], true)

            gsap.to('#step-11 .control-1', { opacity: 0 })
            gsap.to('#step-11 .control-2', {
                delay: 3, opacity: 1, onComplete: () => {
                    currentSegment11++
                }
            })
        }
        else if (currentSegment11 == 2) {
            lottie11.playSegments([118, 366], true)

            gsap.to('#step-11 .control-2', { opacity: 0 })
            gsap.to('#step-11 .control-3', {
                delay: 5, opacity: 1, onComplete: () => {
                    currentSegment11++
                }
            })
        }
        else if (currentSegment11 == 3) {
            lottie11.playSegments([366, 429], true)

            gsap.to('#step-11 .control-3', { opacity: 0 })
            gsap.to('#step-11 .control-4', {
                delay: 5, opacity: 1, onComplete: () => {
                    currentSegment11++
                }
            })
        }
        // J1
        else if (currentSegment11 == 4) {
            lottie11.playSegments([429, 520], true)

            gsap.to('#step-11 .control-4', { opacity: 0 })
            gsap.to('#step-11 .control-111, #step-11 .control-112', {
                delay: 3, opacity: 1, onComplete: () => {
                    canTitrate = true
                }
            })
        }
        // J2
        else if (currentSegment11 == 5) {
            lottie11.playSegments([1114, 1220], true)

            gsap.to('#step-11 .control-5', { opacity: 0 })
            gsap.to('#step-11 .control-111, #step-11 .control-112', {
                delay: 5, opacity: 1, onComplete: () => {
                    canTitrate = true
                }
            })
        }
        // J3
        else if (currentSegment11 == 6) {
            lottie11.playSegments([1730, 1820], true)

            gsap.to('#step-11 .control-6', { opacity: 0})
            gsap.to('#step-11 .control-111, #step-11 .control-112', {
                delay: 5, opacity: 1, onComplete: () => {
                    canTitrate = true
                }
            })
        }
        // J4
        else if (currentSegment11 == 7) {
            lottie11.playSegments([2330, 2399], true)

            gsap.to('#step-11 .control-7', { opacity: 0 })
            gsap.to('#step-11 .control-111, #step-11 .control-112', {
                delay: 5, opacity: 1, onComplete: () => {
                    canTitrate = true
                }
            })
        }
    }
}

// function startTitration2() {
//     if (canTitrate) {
//         if (currentSegment11 == 4) {
//             lottie11.playSegments([520, 1093], true)
//         } else if (currentSegment11 == 5) {
//             lottie11.playSegments([1220, 1730], true)
//         } else if (currentSegment11 == 6) {
//             lottie11.playSegments([1815, 2330], true)
//         } else if (currentSegment11 == 7) {
//             lottie11.playSegments([2399, 2766], true)
//         }

//         handle = setInterval(() => {
//             currentValue11 += dropScale[selectedSample]

//             var diff = 0

//             if (currentSegment11 == 4) {
//                 diff = currentValue11 - j1results[selectedSample]
//             } else if (currentSegment11 == 5) {
//                 diff = currentValue11 - j2results[selectedSample]
//             } else if (currentSegment11 == 6) {
//                 diff = currentValue11 - j3results[selectedSample]
//             } else if (currentSegment11 == 7) {
//                 diff = currentValue11 - j4results[selectedSample]
//             }

//             if (Math.abs(diff) <= dropScale[selectedSample]) {
//                 gsap.to('.titration-status-1', { opacity: 1 })
//             } else if ((diff) > dropScale[selectedSample]) {
//                 gsap.to('.titration-status-1', { background: '#F44336' })
//                 document.querySelector('.titration-status-1 h1').innerHTML = 'Over Titrated'
//                 stopTitration2()

//                 gsap.to('#controls-2', { display: 'block' })
//                 document.querySelector('.back-button').onclick = () => {
//                     window.location.reload()
//                     gsap.to('#controls-2', { display: 'none' })
//                 }
//             }

//             if (currentSegment11 == 4) {
//                 document.querySelector('#step-11 .read-1').innerHTML = `${currentValue11.toFixed(2)} ml`
//             } else if (currentSegment11 == 5) {
//                 document.querySelector('#step-11 .read-2').innerHTML = `${currentValue11.toFixed(2)} ml`
//             } else if (currentSegment11 == 6) {
//                 document.querySelector('#step-11 .read-3').innerHTML = `${currentValue11.toFixed(2)} ml`
//             }  else if (currentSegment11 == 7) {
//                 document.querySelector('#step-11 .read-4').innerHTML = `${currentValue11.toFixed(2)} ml`
//             }
//         }, 1000);
//     }
// }

function startTitration2() {
    if (canTitrate) {
        if (currentSegment11 == 4) {
            lottie11.playSegments([520, 1093], true);
        } else if (currentSegment11 == 5) {
            lottie11.playSegments([1220, 1730], true);
        } else if (currentSegment11 == 6) {
            lottie11.playSegments([1815, 2330], true);
        } else if (currentSegment11 == 7) {
            lottie11.playSegments([2399, 2766], true);
        }

        handle = setInterval(() => {
            currentValue11 += dropScale[selectedSample];

            var diff = 0;

            if (currentSegment11 == 4) {
                diff = currentValue11 - j1results[selectedSample];
            } else if (currentSegment11 == 5) {
                diff = currentValue11 - j2results[selectedSample];
            } else if (currentSegment11 == 6) {
                diff = currentValue11 - j3results[selectedSample];
            } else if (currentSegment11 == 7) {
                diff = currentValue11 - j4results[selectedSample];
            }

            if (Math.abs(diff) <= dropScale[selectedSample]) {
                gsap.to('.titration-status-1', { opacity: 1 });
            } else if (diff > dropScale[selectedSample]) {
                gsap.to('.titration-status-1', { background: '#F44336' });
                document.querySelector('.titration-status-1 h1').innerHTML = 'Over Titrated';
                stopTitration2();

                gsap.to('#controls-2', { display: 'block' });
                document.querySelector('.back-button').onclick = () => {
                    window.location.reload();
                    gsap.to('#controls-2', { display: 'none' });
                };
            }

            if (currentSegment11 == 4) {
                document.querySelector('#step-11 .read-1').innerHTML = `${currentValue11.toFixed(2)} ml`;
            } else if (currentSegment11 == 5) {
                document.querySelector('#step-11 .read-2').innerHTML = `${currentValue11.toFixed(2)} ml`;
            } else if (currentSegment11 == 6) {
                document.querySelector('#step-11 .read-3').innerHTML = `${currentValue11.toFixed(2)} ml`;
            } else if (currentSegment11 == 7) {
                document.querySelector('#step-11 .read-4').innerHTML = `${currentValue11.toFixed(2)} ml`;
            }
        }, 1000);
    }
}

function stopTitration2() {
    if (canTitrate) {
        titrating = false;
        clearInterval(handle);

        var diff = 0;

        if (currentSegment11 == 4) {
            diff = currentValue11 - j1results[selectedSample];
        } else if (currentSegment11 == 5) {
            diff = currentValue11 - j2results[selectedSample];
        } else if (currentSegment11 == 6) {
            diff = currentValue11 - j3results[selectedSample];
        } else if (currentSegment11 == 7) {
            diff = currentValue11 - j4results[selectedSample];
        }

        if (Math.abs(diff) <= dropScale[selectedSample]) {
            gsap.to('#step-11 .control-111, #step-11 .control-112', { opacity: 0 });
            gsap.to('.titration-status-1', { opacity: 0 });

            if (currentSegment11 == 4) {
                gsap.to('#step-11 .control-5', { opacity: 1 });
                document.querySelector('.result-observation-j1').innerHTML = `${currentValue11.toFixed(2)} ml`;
                document.querySelector('.result-final-j1').innerHTML = `J1: Ascorbic acid = ${parseFloat((currentValue11 * dyeFactor * 10).toFixed(2))} mg/100mg`;
                resultFinalJ1 =(currentValue11 * dyeFactor * 10).toFixed(2)
               
                
            }

            if (currentSegment11 == 5) {
                gsap.to('#step-11 .control-6', { opacity: 1 });
                document.querySelector('.result-observation-j2').innerHTML = `${currentValue11.toFixed(2)} ml`;
                document.querySelector('.result-final-j2').innerHTML = `J2: Ascorbic acid = ${((currentValue11 * dyeFactor * 10).toFixed(2))} mg/100mg`;
                resultFinalJ2 =(currentValue11 * dyeFactor * 10).toFixed(2)
            }

            if (currentSegment11 == 6) {
                gsap.to('#step-11 .control-7', { opacity: 1 });
                document.querySelector('.result-observation-j3').innerHTML = `${currentValue11.toFixed(2)} ml`;
                document.querySelector('.result-final-j3').innerHTML = `J3: Ascorbic acid = ${((currentValue11 * dyeFactor * 10).toFixed(2))} mg/100mg`;
                resultFinalJ3 =(currentValue11 * dyeFactor * 10).toFixed(2)
            }

            if (currentSegment11 == 7) {
                lottie11.playSegments([2766, 2846], true);

                task_done = true;
                addTask('Step 10: Titrate each sample with DCPIP dye solution to a pink color which persists for 15s observation');

                document.querySelector('.result-observation-j4').innerHTML = `${currentValue11.toFixed(2)} ml`;
                document.querySelector('.result-final-j4').innerHTML = `J4: Ascorbic acid = ${((currentValue11 * dyeFactor * 10).toFixed(2))} mg/100mg`;
                resultFinalJ4 =(currentValue11 * dyeFactor * 10).toFixed(2)
            }

            canTitrate = false;
            currentSegment11++;
            currentValue11 = 0;

            // Call the checkAnswers function
            checkAnswers();
        }
    }
}

function checkAnswers() {
    // Correctly compute the expected results based on j1results, j2results, etc.
    const correctAnswers = {
        j1: resultFinalJ1,
        j2:resultFinalJ2,
        j3:resultFinalJ3,
        j4:resultFinalJ4
    };

    // Debug: log correctAnswers to check their values
    console.log('Correct Answers:', correctAnswers);

    // Check each answer
    for (let key in correctAnswers) {
        const userAnswer = document.getElementById(key).value.trim();
        const feedbackElement = document.getElementById(`feedback-${key}`);

        // Debug: log user answers and correct answers for comparison
        console.log(`Checking ${key}: User Answer = '${userAnswer*100}', Correct Answer = '${correctAnswers[key]}*100'`);

        if (userAnswer*100 === correctAnswers[key]*100) {
            feedbackElement.textContent = "Right answer";
            feedbackElement.className = "feedback correct";
        } else {
            feedbackElement.textContent = "Wrong answer";
            feedbackElement.className = "feedback incorrect";
        }
    }
}

// formula shows

function showFormula() {
    var formulaDiv = document.getElementById('formula');
    var button = document.querySelector('button.btn');
    if (formulaDiv.style.display === 'none' || formulaDiv.style.display === '') {
        formulaDiv.style.display = 'block';
        button.textContent = 'Hide Formula';
    } else {
        formulaDiv.style.display = 'none';
        button.textContent = 'Show Formula';
    }
}

// show ascorbic acid 
function showAcid() {
    var formulaDiv = document.getElementById('acid');
    var button = document.querySelector('button.btn1');
    if (formulaDiv.style.display === 'none' || formulaDiv.style.display === '') {
        formulaDiv.style.display = 'block';
        button.textContent = 'Hide Result';
    } else {
        formulaDiv.style.display = 'none';
        button.textContent = 'Show Result ';
    }
}

// Quizz check  


