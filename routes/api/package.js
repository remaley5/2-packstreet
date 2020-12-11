const express = require('express');
const asyncHandler = require('express-async-handler');
// const { PackageBases } = require('../../../frontend/src/components/packages/PackageBases');
const { TextStyle, ImageStyle, PackageFace, PackageBase, SavedPackageDesign,  Photo } = require('../../db/models');
const { authenticated } = require('./security-utils')


const router = express.Router();

router.get('/bases', asyncHandler(async function (req, res) {
    const packageBases = await PackageBase.findAll();
    res.json(packageBases);
}));

router.get('/bases/:id', asyncHandler(async function (req, res) {
    const packageBase = await PackageBase.findByPk(req.params.id)
    res.json(packageBase);
}));

router.get('/my-designs/:id', asyncHandler(async function (req, res) {

    const designs = await SavedPackageDesign.findAll({
        where: {
            userId: req.params.id
        },
        include: [
            {
                model: PackageBase
            }, {
                model: PackageFace,
                include: [{
                    model: ImageStyle
                }, {
                    model: TextStyle
                }],
            }]
    });
    res.json({ designs });
}))

router.post('/save', asyncHandler(async function (req, res) {
    const { userId, designState } = req.body;

    let packageFaces = designState.packageFaces
    const newSavedPackageDesign = await SavedPackageDesign.create({
        name: designState.name,
        userId: userId,
        packageBaseId: 2
    });

    const textStyles = [];
    const imageStyles = [];
    const faces = [];

    for (let packageFace in packageFaces) {
        let attributes = { side: packageFace, packageDesignId: newSavedPackageDesign.id };
        if(packageFace.color) attributes.color = packageFace.color;
        const createdPackage = await PackageFace.create(attributes)
        faces.push(createdPackage);

        const thePackageFace = packageFaces[packageFace]

        imageAttributes = { url: thePackageFace.imageStyle.url, packageFaceId: createdPackage.id }
        if (thePackageFace.imageStyle.cover) imageAttributes.cover = thePackageFace.imageStyle.cover;
        imageStyles.push(await ImageStyle.create(imageAttributes))

        textAttributes = { text: thePackageFace.textStyle.text, packageFaceId: createdPackage.id }
        if (thePackageFace.textStyle.fontSize) textAttributes.fontSize = thePackageFace.textStyle.fontSize;
        if (thePackageFace.textStyle.font) textAttributes.fontFamily = thePackageFace.textStyle.font;
        if (thePackageFace.textStyle.color) textAttributes.color = thePackageFace.textStyle.color;
        textStyles.push(await TextStyle.create(textAttributes));

    }
    res.json({ newSavedPackageDesign, imageStyles, textStyles, faces });
}))

router.get("/photos/:id", asyncHandler(async function (req, res) {
    console.log('GETTING PHOTOS', req.params.id)
    const photos = await Photo.findAll({
        where: {
            userId: req.params.id
        }
    })
    console.log('get the photooos!!!', photos)
    res.json({ photos })
}))

module.exports = router;
