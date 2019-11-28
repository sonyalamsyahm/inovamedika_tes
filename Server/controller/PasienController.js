const model = require('../models')
const pasien = model.pasien
const polikliniks = model.poliklinik
const agamas = model.agama
const kelamins = model.kelamin
const pendidikans = model.pendidikan
const statuses = model.status
const goldars = model.goldar
const warganegaras = model.warganegara

exports.storePasien = (req, res) => {
    const {
        nama,
        alamat,
        kelurahan,
        kodya,
        umur,
        kecamatan,
        jeniskelaminId,
        telepon,
        pendidikanId,
        pekerjaan,
        agamaId,
        warganegaraId,
        statusId,
        goldarId,
        penanggungjawab,
        poliklinikId
    } = req.body
    console.log(req.body)
    pasien.create({
        nama,
        alamat,
        kelurahan,
        kodya,
        umur,
        kecamatan,
        jeniskelaminId,
        telepon,
        pendidikanId,
        pekerjaan,
        agamaId,
        warganegaraId,
        statusId,
        goldarId,
        penanggungjawab,
        poliklinikId
    })
    .then(pasienRespons => {
        res.json(pasienRespons)
    })
}

exports.showPasien = (req, res) => {
    pasien.findAll({
        include : [{
            model : polikliniks,
            attributes : {
                exclude : ["id", "createdAt", "updatedAt"]
            }
        }],
        attributes : {
            exclude : ["jeniskelaminId", "pendidikanId", "agamaId", "warganegaraId", "statusId", "goldarId", "poliklinikId"]
        }
    })
    .then(showRespons => {

        let temp = []

        showRespons.map(x => {
            let obj = {}
            obj["nama"] = x.nama
            obj["poliklinik"] = x.poliklinik.dataValues.nama
            temp.push(obj)
        })

        res.json(temp)
    })
}

exports.showDetailPasien = (req, res) => {
    pasien.findOne({
        include : [{
            model : agamas,
            attributes : {
                exclude : ["id", "createdAt", "updatedAt"]
            }
        },{
            model : polikliniks,
            attributes : {
                exclude : ["id", "createdAt", "updatedAt"]
            }
        },{
            model : kelamins,
            attributes : {
                exclude : ["id", "createdAt", "updatedAt"]
            }
        },{
            model : pendidikans,
            attributes : {
                exclude : ["id", "createdAt", "updatedAt"]
            }
        },{
            model : statuses,
            attributes : {
                exclude : ["id", "createdAt", "updatedAt"]
            }
        },{
            model : goldars,
            attributes : {
                exclude : ["id", "createdAt", "updatedAt"]
            }
        },{
            model : warganegaras,
            attributes : {
                exclude : ["id", "createdAt", "updatedAt"]
            }
        }],
        attributes : {
            exclude : ["jeniskelaminId", "pendidikanId", "agamaId", "warganegaraId", "statusId", "goldarId", "poliklinikId"]
        },
        where : {
            id : req.params.pasienId
        }
    })
    .then(showRespons => {
        res.json(showRespons)
    })
}