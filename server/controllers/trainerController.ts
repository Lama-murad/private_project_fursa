import Trainer from '../model/schema/trainerModel';


exports.getTrainerByLevel = async (req, res) => {
    console.log('get-tariner-by-level-controller');
    try {
        console.log("fat 3l controller")
        const { level } = req.body;
        const _acc = await Trainer.find({ "level": level });
        res.send({ ok: true, trainers: _acc });
    } catch (error: any) {
        res.send({ ok: false, error: error.message });
    }
}
