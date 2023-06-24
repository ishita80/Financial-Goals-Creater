const btn=document.querySelector(".btn-goal");
const container=document.querySelector(".container");

let goal_id=1;

function addGoalItem() {
    if(document.querySelector(".input-goal-name").value==""){
        alert("Please enter a goal");
        return;
    }
    if(document.querySelector(".input-goal-date").value==""){
        alert("Please enter a date");
        return;
    }
    if(document.querySelector(".input-goal-date").value==""){
        alert("Please enter a date");
        return;
    }


    var goal_item=document.createElement("div");
    goal_item.classList.add("goal-item");
    goal_item.id=`gi${goal_id}`;
    goal_id++;

    var goal_details=document.createElement("div");
    goal_details.classList.add("goal-details");
    goal_item.appendChild(goal_details);
    
    var details_name=document.createElement("div");
    details_name.classList.add("details");
    details_name.textContent="Goal :";
    var name_span=document.createElement("span");
    name_span.classList.add("goal-name");
    name_span.textContent="\u00A0"+document.querySelector(".input-goal-name").value;
    details_name.appendChild(name_span);
    goal_details.appendChild(details_name);

    var details_cost=document.createElement("div");
    details_cost.classList.add("details");
    details_cost.textContent="Total Cost :";
    var cost_span=document.createElement("span");
    cost_span.classList.add("goal-cost");
    cost_span.textContent="\u00A0"+document.querySelector(".input-goal-cost").value;
    details_cost.appendChild(cost_span);
    goal_details.appendChild(details_cost);


    var details_savings=document.createElement("div");
    details_savings.classList.add("details");
    details_savings.textContent="Saved :";
    var savings_span=document.createElement("span");
    savings_span.classList.add("goal-savings");
    savings_span.textContent="\u00A0"+"450000";
    details_savings.appendChild(savings_span);
    goal_details.appendChild(details_savings);

    var details_date=document.createElement("div");
    details_date.classList.add("details");
    details_date.textContent="Deadline :";
    var date_span=document.createElement("span");
    date_span.classList.add("goal-date");
    date_span.textContent="\u00A0"+document.querySelector(".input-goal-date").value;
    details_date.appendChild(date_span);
    goal_details.appendChild(details_date);

    var progress_bar=document.createElement("div");
    progress_bar.classList.add("progress-bar");
    var progress_inner_circle=document.createElement("div");
    progress_inner_circle.classList.add("progress-bar-inner-circle");
    var progress_number=document.createElement("div");
    progress_number.classList.add("progress-number");
    progress_number.textContent="\u00A0"+(savings_span.textContent/cost_span.textContent)*100+"%";

    progress_inner_circle.appendChild(progress_number);
    progress_bar.appendChild(progress_inner_circle);
    progress_bar.style.background=`conic-gradient(rgb(255, 162, 208) 0%, rgb(236, 15, 188) ${(savings_span.textContent/cost_span.textContent)*100}%,rgb(248, 242, 242) ${(savings_span.textContent/cost_span.textContent)*100}% , rgb(248, 242, 242) 100%)`;
    goal_item.appendChild(progress_bar);

    var goal_item_container=document.createElement("div");
    goal_item_container.classList.add("goal-items-container");
    goal_item_container.appendChild(goal_item);

    container.appendChild(goal_item_container);

    document.querySelector(".input-goal-name").value="";
    document.querySelector(".input-goal-cost").value="";
    document.querySelector(".input-goal-date").value="";

}

btn.addEventListener("click", addGoalItem);

