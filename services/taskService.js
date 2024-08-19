const taskModel = require('../models/taskModel');



exports.createTask = async (req, res) =>  {
    const newTAsk = await taskModel.create({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
    });

    res.status(201).json({
        success: true,
        data: newTAsk
    });

};


exports.getTasks = async (req, res) => {

    const tasks = await taskModel.find();
    if (tasks) {
        res.status(200).json({
            success: true,
            data: tasks
        });
    } else {
        res.status(204).json({
            success: true,
            data: []
        });
    }
   
};

exports.deleteTask = async (req, res) => {

    const task = await taskModel.findByIdAndDelete(req.params.id);

    if (task) {
        res.status(200).json({
            success: true,
            data: task
        });
    } else {
        res.status(204).json({
            success: true,
            data: []
        });
    }
};

exports.updateTask = async (req, res) => {

    const task = await taskModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    
    if (task) {
        res.status(200).json({
            success: true,
            data: task
        });
    } else {
        res.status(204).json({
            success: true,
            data: []
        });
    }
}