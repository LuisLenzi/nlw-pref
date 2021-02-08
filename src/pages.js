module.exports = {
    index(request, response){
        return response.render('index')
    },
    pageLocations(request, response){
        return response.render('page-locations')
    },
    createLocations(request, response){
        return response.render('create-locations')
    },
    locations(request, response){
        return response.render('locations')

    }
}