const { Company, User } = require('./../models');
const CompaniesService = require('./../services/CompaniesService');
const companiesService = new CompaniesService({ Company, User });

const creatCompany = async function(req, res, next) {

    let creatCompanyProcess = await companiesService.creatCompany(req.body);

    return res.status(201).send(creatCompanyProcess);
};

const listCompanies = async function(req, res, next) {

    let listCompaniesProcess = await companiesService.listCompanies();

    return res.status(200).send(listCompaniesProcess);
};

const updateCompany = async function(req, res, next) {

    let updateCompanyProcess = await companiesService.updateCompany(req.params.companyId, req.body);

    return res.status(200).send(updateCompanyProcess);
};

const deleteCompany = async function(req, res, next) {

    let deleteCompanyProcess = await companiesService.deleteCompany(req.params.companyId);

    return res.status(200).send(deleteCompanyProcess);
};

const addUsersToCompany = async function(req, res, next) {

    let addUsersToCompanyProcess = await companiesService.addUsersToCompany(req.params.companyId, req.body);

    return res.status(200).send(addUsersToCompanyProcess);
};

const listOneCompany = async function(req, res, next) {

    let listOneCompanyProcess = await companiesService.listOneCompany(req.params.companyId);

    return res.status(200).send(listOneCompanyProcess);
};

module.exports = {
    creatCompany,
    listCompanies,
    updateCompany,
    deleteCompany,
    addUsersToCompany,
    listOneCompany
}
