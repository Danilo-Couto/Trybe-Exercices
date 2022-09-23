"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MailList {
    constructor(mailList = []) {
        this.mailList = mailList;
    }
    get all() { return this.mailList; }
    getByEmailFrom(mailAddress) {
        return this.mailList.filter((mail) => mail.from === mailAddress);
    }
    getByEmailTo(mailAddress) {
        return this.mailList.filter((mail) => mail.to === mailAddress);
    }
    getBySubject(searchString) {
        return this.mailList.filter((mail) => mail.subject.indexOf(searchString) !== -1);
    }
    addEmail(newMail) { this.mailList.push(newMail); }
    removeEmail(mailToRemove) {
        this.mailList = this.mailList.filter((mail) => mail !== mailToRemove);
    }
}
exports.default = MailList;
