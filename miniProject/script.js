function simulateXSS() {
    const userInput = document.getElementById('xssInput').value;
    const outputDiv = document.getElementById('xssOutput');

    // XSS 구문 검증
    if (userInput.includes('<script>') && userInput.includes('</script>') ) {
        outputDiv.innerHTML = '해킹되었습니다';
    } else {
        // 입력된 내용을 안전하게 출력하기 위해 텍스트 노드로 추가
        outputDiv.textContent = `입력된 내용: ${userInput}`;
    }
}

function simulateSQLInjection() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const outputDiv = document.getElementById('sqlOutput');

    // SQL Injection 구문 검증
    if (username.includes("'or''='") || password.includes("'or''='")) {
        outputDiv.innerText = '해킹되었습니다';
    } else {
        // 생성된 SQL 쿼리 출력
        const fakeQuery = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
        outputDiv.innerText = `생성된 SQL 쿼리: ${fakeQuery}`;
    }
}
function simulateUnionSQLInjection() {
    const userInput = document.getElementById('unionSqlInput').value;
    const outputDiv = document.getElementById('unionSqlOutput');

    // Union SQL Injection 구문 검증
    if (userInput.toLowerCase().includes("'union select all 1,2,3,4,5#")) {
        // 공격 시뮬레이션: 5개의 컬럼으로 설정된 쿼리
        const fakeQuery = `
            <table border="1">
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Residence</th>
                    <th>Other</th>
                </tr>
                <tr>
                    <td>John</td>
                    <td>Male</td>
                    <td>30</td>
                    <td>New York</td>
                    <td>Lorem ipsum</td>
                </tr>
                <tr>
                    <td>Jane</td>
                    <td>Female</td>
                    <td>25</td>
                    <td>Los Angeles</td>
                    <td>Dolor sit amet</td>
                </tr>
                <tr>
                    <td>Michael</td>
                    <td>Male</td>
                    <td>35</td>
                    <td>Chicago</td>
                    <td>Consectetur adipiscing elit</td>
                </tr>
                <tr>
                    <td>Emily</td>
                    <td>Female</td>
                    <td>28</td>
                    <td>Miami</td>
                    <td>Sed do eiusmod tempor</td>
                </tr>
            </table>`;
        outputDiv.innerHTML = `Injected SQL Query:<br>${fakeQuery}`;
    } else if (userInput.toLowerCase().includes("'union select all 1")) {
        outputDiv.innerText = 'The used SELECT statements have a different numbers of columns';
    } else {
        outputDiv.innerText = 'No SQL Injection detected';
    }
}
