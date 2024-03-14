"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const AdministratorRoutes_1 = __importDefault(require("./routes/AdministratorRoutes"));
const ClientRoutes_1 = __importDefault(require("./routes/ClientRoutes"));
const ProductRoutes_1 = __importDefault(require("./routes/ProductRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: 'http://localhost:3002',
    credentials: true,
    optionsSuccessStatus: 200,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
}));
app.get('/check', (req, res) => {
    res.send('arena JAF | Oficial route');
});
app.use("/adm", AdministratorRoutes_1.default);
app.use("/client", ClientRoutes_1.default);
app.use("/product", ProductRoutes_1.default);
app.listen(process.env.PORT || 3033, () => {
    console.log('[ArenaJaf] Server running on PORT -> ', process.env.PORT);
});
exports.default = app;
