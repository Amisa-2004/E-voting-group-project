// js/main.js

// Render results on results.html
function renderResultsPage() {
    const resultsData = getResultsData();
    const totalVotes = resultsData.reduce((sum, c) => sum + c.votes, 0);

    const tbody = document.getElementById("resultsBody");
    tbody.innerHTML = "";

    resultsData.forEach(c => {
        const percentage = ((c.votes / totalVotes) * 100).toFixed(1);
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${c.name}</td>
            <td>${c.votes}</td>
            <td>
                <div class="bar-container">
                    <div class="bar ${c.color}" style="width:${percentage}%;">
                        ${percentage}%
                    </div>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Render admin dashboard on admin.html
function renderAdminDashboard() {
    const resultsData = getResultsData();
    const registeredVoters = getRegisteredVoters();

    const totalVotes = resultsData.reduce((sum, c) => sum + c.votes, 0);
    const turnout = ((totalVotes / registeredVoters) * 100).toFixed(1);

    document.getElementById("totalVotes").textContent = totalVotes;
    document.getElementById("registeredVoters").textContent = registeredVoters;
    document.getElementById("turnout").textContent = turnout + "%";

    const tbody = document.getElementById("resultsBody");
    tbody.innerHTML = "";

    resultsData.forEach(c => {
        const percentage = ((c.votes / totalVotes) * 100).toFixed(1);
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${c.name}</td>
            <td>${c.votes}</td>
            <td>
                <div class="bar-container">
                    <div class="bar ${c.color}" style="width:${percentage}%;">
                        ${percentage}%
                    </div>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}
