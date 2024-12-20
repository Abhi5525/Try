const seatMap = {
    shift1: {
        rows: {
            A: ['available', 'available', 'available', 'booked', 'available', 'available', 'available', 'booked', 'available', 'available'],
            B: ['available', 'booked', 'available', 'available', 'available', 'booked', 'available', 'available', 'available', 'booked'],
            C: ['available', 'available', 'booked', 'available', 'available', 'available', 'booked', 'available', 'available', 'available'],
            D: ['booked', 'available', 'available', 'booked', 'available', 'available', 'available', 'available', 'booked', 'available'],
            E: ['available', 'available', 'available', 'available', 'booked', 'available', 'available', 'booked', 'available', 'available']
        }
    },
    shift2: {
        rows: {
            A: ['booked', 'booked', 'available', 'available', 'booked', 'available', 'available', 'available', 'booked', 'available'],
            B: ['available', 'available', 'booked', 'booked', 'available', 'booked', 'available', 'available', 'available', 'available'],
            C: ['booked', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'booked'],
            D: ['available', 'booked', 'booked', 'available', 'available', 'available', 'available', 'available', 'available', 'booked'],
            E: ['available', 'available', 'available', 'booked', 'available', 'booked', 'available', 'available', 'available', 'available']
        }
    },
    shift3: {
        rows: {
            A: ['available', 'available', 'booked', 'booked', 'available', 'available', 'available', 'booked', 'available', 'available'],
            B: ['booked', 'available', 'available', 'available', 'available', 'available', 'available', 'booked', 'available', 'booked'],
            C: ['available', 'booked', 'available', 'available', 'booked', 'available', 'available', 'available', 'available', 'available'],
            D: ['available', 'available', 'booked', 'available', 'available', 'booked', 'available', 'available', 'available', 'available'],
            E: ['available', 'available', 'available', 'available', 'available', 'available', 'booked', 'available', 'available', 'available']
        }
    }
};

function loadSeats(shift) {
    const seatMapContainer = document.getElementById('seat-map');
    const selectedShift = seatMap[shift];

    seatMapContainer.innerHTML = '<div class="seat-label">Screen</div>';

    Object.keys(selectedShift.rows).forEach(row => {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row');

        const rowLabel = document.createElement('span');
        rowLabel.classList.add('row-label');
        rowLabel.textContent = row;

        rowContainer.appendChild(rowLabel);

        selectedShift.rows[row].forEach((status, index) => {
            const seat = document.createElement('div');
            seat.classList.add('seat');
            seat.classList.add(status);
            seat.setAttribute('data-seat', `${row}${index + 1}`);
            seat.setAttribute('title', `${row}${index + 1}`);
            rowContainer.appendChild(seat);
        });

        seatMapContainer.appendChild(rowContainer);
    });
}
