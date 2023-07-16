"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDeleteNotification = exports.fetchUpdateNotification = exports.fetchCreateNotification = exports.fetchReadNotificationInfoDetail = exports.fetchReadNotificationInfo = void 0;
const domainPort = process.env.REACT_APP_URL;
// READ
const fetchReadNotificationInfo = (page, size, keyword) => __awaiter(void 0, void 0, void 0, function* () {
    const adminToken = sessionStorage.getItem('adminToken');
    const response = yield fetch(`${domainPort}/api/notices?page=${page}&size=${size}&keyword=${keyword}`, {
        headers: { Authorization: `Bearer ${adminToken}` },
    });
    const data = yield response.json();
    return data;
});
exports.fetchReadNotificationInfo = fetchReadNotificationInfo;
const fetchReadNotificationInfoDetail = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const adminToken = sessionStorage.getItem('adminToken');
    const response = yield fetch(`${domainPort}/api/notices/${id}`, {
        headers: { Authorization: `Bearer ${adminToken}` },
    });
    const data = yield response.json();
    return data;
});
exports.fetchReadNotificationInfoDetail = fetchReadNotificationInfoDetail;
// CREATE
const fetchCreateNotification = (newNotification) => __awaiter(void 0, void 0, void 0, function* () {
    const adminToken = sessionStorage.getItem('adminToken');
    const response = yield fetch(`${domainPort}/api/notices`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${adminToken}`,
            'Content-type': 'application/json',
        },
        body: JSON.stringify(newNotification),
    });
    const data = yield response.json();
    return data;
});
exports.fetchCreateNotification = fetchCreateNotification;
// UPDATE
const fetchUpdateNotification = (id, newNotification) => __awaiter(void 0, void 0, void 0, function* () {
    const adminToken = sessionStorage.getItem('adminToken');
    const response = yield fetch(`${domainPort}/api/notices/${id}`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${adminToken}`,
            'Content-type': 'application/json',
        },
        body: JSON.stringify(newNotification),
    });
    const data = yield response.json();
    return data;
});
exports.fetchUpdateNotification = fetchUpdateNotification;
// DELETE
const fetchDeleteNotification = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const adminToken = sessionStorage.getItem('adminToken');
    const response = fetch(`${domainPort}/api/notices/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${adminToken}`,
        },
    });
    return response.status;
});
exports.fetchDeleteNotification = fetchDeleteNotification;
