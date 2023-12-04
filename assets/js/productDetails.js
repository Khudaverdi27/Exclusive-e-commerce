const ui = {
    minusBtn: document.getElementById('minus-btn'),
    plusBtn: document.getElementById('plus-btn'),
    count: document.getElementById('count-box')
}

function updateCount(action) {
    let currentCount = parseInt(ui.count.textContent);

    if (action === 'decrease') {
        ui.count.textContent = currentCount > 0 ? --currentCount : 0;
    } else if (action === 'increase') {
        ui.count.textContent = ++currentCount;
    }
}

if (ui.minusBtn) {
    ui.minusBtn.addEventListener('click', function () {
        updateCount('decrease');
    });
}

if (ui.plusBtn) {
    ui.plusBtn.addEventListener('click', function () {
        updateCount('increase');
    });
}




