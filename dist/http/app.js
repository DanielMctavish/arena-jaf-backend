"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const AdministratorRoutes_1 = __importDefault(require("./routes/AdministratorRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/adm", AdministratorRoutes_1.default);
app.use('/', (req, res) => {
    res.send('arena JAF | Oficial route');
});
app.listen(process.env.PORT || 3001, () => {
    console.log('[ArenaJaf] Server running');
});
exports.default = app;
