function Answer_1(id)
{
    event.preventDefault();
    Task_Answer_1 = document.querySelector(`[name="${id}"]:checked`).value;
    if (Task_Answer_1 == 9)
    {
        alert("Правильно!");
    }
    else
    {
        alert("Неправильно.");
    }
}
