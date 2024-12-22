localforage.config({
  driver: localforage.INDEXEDDB,
  name: "DevTaskManager",
  version: 1.0,
  storeName: "tasks",
  description: "DevTask Manager Storage",
});

// Initialize drag and drop for each column
document.querySelectorAll(".task-list").forEach((taskList) => {
  new Sortable(taskList, {
    group: "tasks",
    animation: 150,
    ghostClass: "task-card-ghost",
    onEnd: function (evt) {
      // Here we would update the task status in LocalForage
      console.log("Task moved:", {
        from: evt.from.id,
        to: evt.to.id,
        task: evt.item,
      });
    },
  });
});

// View switcher functionality
document.querySelectorAll(".view-button").forEach((button) => {
  button.addEventListener("click", function () {
    document.querySelector(".view-button.active").classList.remove("active");
    this.classList.add("active");
    // Here we would implement view switching logic
  });
});

// Initialize LocalForage
localforage.config({
  name: "DevTaskManager",
  storeName: "tasks",
});

// Add task button functionality
document.querySelectorAll(".add-task-btn").forEach((button) => {
  button.addEventListener("click", function () {
    // Here we would implement task creation logic
    console.log(
      "Add task clicked in column:",
      this.closest(".board-column")
        .querySelector(".column-header")
        .textContent.trim()
    );
  });
});
