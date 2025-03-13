function openTab(event, tabId) {
    let contents = document.querySelectorAll('.tab-content');
    let buttons = document.querySelectorAll('.tab-button');
    
    contents.forEach(content => content.classList.remove('active'));
    buttons.forEach(button => button.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}