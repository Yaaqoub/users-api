class CompaniesService {

    constructor({ Company }) {
        this.companyModel = Company;
    }

    async creatCompany(data) {
        // Check if company exists
        let _company = await this.companyModel.findOne({
            name: data.name
        });

        if (_company) {
            return {
                message: 'Failed! Company already exists!'
            };
        } else {
            _company = new this.companyModel(data);
            await _company.save();

            return {
                message: `Company (${data.name}) created successfully!`
            };
        }
    }

    async listCompanies() {
        let _companies = await this.companyModel.find().exec();

        return {
            companies: _companies
        };
    }

    async updateCompany (companyId, data) {
        // Check if company exists
        let _company = await this.companyModel.findById(companyId).exec();

        if (_company) {
            _company.name = data.name ? data.name : _company.name;
            _company.city = data.city ? data.city : _company.city;

            _company = await _company.save();

            return {
                message: 'Company Updated Successfully!',
                company: _company
            };
        } else {
            return {
                message: 'Failed! Company Not Found!'
            };
        }
    }

    async deleteCompany(companyId) {
        await this.companyModel.findByIdAndRemove(companyId);

        return {
            message: 'Company Deleted Successfully!'
        };
    }
}

module.exports = CompaniesService;
