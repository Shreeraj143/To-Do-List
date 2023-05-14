const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const list_el = document.querySelector("#tasks");

window.addEventListener("load", () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert("Please fill in the task");
      return;
    }

    // Create div task
    const task_el = document.createElement("div");
    task_el.classList.add("task");

    //   Create div content
    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
    // task_content_el.innerText = task;

    // Append
    task_el.appendChild(task_content_el);
    list_el.appendChild(task_el);

    //   Input
    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly"); //set readonly to readonly -> readonly: 'readonly'

    task_content_el.appendChild(task_input_el);

    //   Actions
    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    //   Edit
    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerText = "Edit";

    //   Delete
    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerText = "Delete";

    //   Append Edit, Delete and Actions
    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);
    task_el.appendChild(task_actions_el);
    input.value = "";

    //   Working of Edit
    task_edit_el.addEventListener("click", () => {
      if (task_edit_el.innerText.toLowerCase() == "edit") {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit_el.innerText = "Save";
      } else {
        task_edit_el.innerText = "Edit";
        task_input_el.setAttribute("readonly", "readonly");
      }
    });

    //   Working of Delete
    task_delete_el.addEventListener("click", () => {
      list_el.removeChild(task_el);
    });
  });
});
