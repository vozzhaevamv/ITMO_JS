function createTask(name, familyname, login = '471810') {
    const task = Object.create(null);

    task.name = name;
    task.familyname = familyname;
    task.login = login;
    
    task.getFullName = function() {
        return this.name  + this.familyname + '!';
    };
    
    return task;
}
