// js/api.js

// Simulated API for candidate results
function getResultsData() {
    return [
        { name: "Candidate 1", votes: 120, color: "candidate1" },
        { name: "Candidate 2", votes: 95, color: "candidate2" },
        { name: "Candidate 3", votes: 60, color: "candidate3" }
    ];
}

// Total registered voters
function getRegisteredVoters() {
    return 500;
}

// (Later you can replace these with fetch() calls to your backend)
