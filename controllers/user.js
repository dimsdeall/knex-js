const connection = require('../config/mysql/connect')

exports.inputUser = (req, res, next) => {
    // res.send(connection.connection)
    const data = [
        { nama: 'Dimas', belakang: 'Putra' },
        { nama: 'Dombret', belakang: 'Dadang' },
        { nama: 'Oden', belakang: 'Sensne' }
    ]

    const new_data = data.map(x => ({
        first_name: x.nama,
        last_name: x.belakang,
        created_at : new Date(Date.now()),
        updated_at : new Date(Date.now())
    }))

    // res.status(200).json(new_data)

    connection.mysql('users').insert(new_data)
    .then(result => {
        res.status(200).json(result)
    }).catch(error => console.log(error))
}

exports.showUser = async(req, res, next) =>{
    try {
        const data = await connection.mysql().select().table('users')

        if (data) {
            console.log(data);
            res.status(200).json(data)
        }

    } catch (error) {
        console.log(error);
    }
}

exports.deleteUser = async(req, res, next) => {
    try {
        const del = await connection.mysql('users').del().catch(err => console.log(err))

        if (del) {
            res.status(200).json({
                status : 'successs'
            })
        }

    } catch (error) {
        res.send(400).json(error)
    }
}