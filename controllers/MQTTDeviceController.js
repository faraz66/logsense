const MQTTDevice = require('../models/MQTTDevice');

const MQTTDeviceController = () => {
    const updateMQTTDevice = async (req, res) => {
        console.log('updateMQTTDevice', req.body, req.user);
        const result = await MQTTDevice.updateData(req.body, req.user);
        return res.status(result.statusCode).json(result);
    }
    const createMQTTDevice = async (req, res) => {
        console.log('createMQTTDevice', req.body, req.user);
        const result = await MQTTDevice.createData(req.body, req.user);
        return res.status(result.statusCode).json(result);
    }
    const getMQTTDevice = async (req, res) => {
        console.log('getMQTTDevice', req.body, req.user);
        const result = await MQTTDevice.getData(req.body, req.user);
        return res.status(result.statusCode).json(result);
    }
    const deleteMQTTDevice = async (req, res) => {
        console.log('deleteMQTTDevice', req.body, req.user);
        const result = await MQTTDevice.deleteData(req.body, req.user);
        return res.status(result.statusCode).json(result);
    }
    const assignMQTTDevice = async (req, res) => {
        console.log('assignMQTTDevice', req.body, req.user);
        const result = await MQTTDevice.assignMQTTDevice(req.body, req.user);
        return res.status(result.statusCode).json(result);
    }

    return {
        updateMQTTDevice,
        createMQTTDevice,
        getMQTTDevice,
        deleteMQTTDevice,
        assignMQTTDevice
    };
};

module.exports = MQTTDeviceController;