function Answer_1(id)
{
    event.preventDefault();
    Task_Answer_1 = document.querySelector(`[name="${id}"]:checked`).value;
    if (Task_Answer_1 == 1)
    {
        alert("Правильно!");
    }
    else
    {
        alert("Неправильно.");
    }
}
