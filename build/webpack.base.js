const path = require("path");
const root = path.resolve(__dirname, "../");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
	context: root,
	entry: {
		main: "./index.ts"
	},
	stats:"none",
	resolve: {
		extensions: [".tsx", ".ts", ".js",".html"],
		alias: {
			"@": path.resolve(__dirname, "../src")
		}
	},
	externals: {},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: ["babel-loader","ts-loader",],
				exclude: /node_modules/
			},
			// 处理图片
			{
				test: /\.(png)|(gif)|(jpg)$/,
				use: [{
					loader: "url-loader",
					options: {
						// limit: false //不限制任何大小，所有经过loader的文件进行base64编码返回
						limit: 10 * 1024, //只要文件不超过 100*1024 字节，则使用base64编码，否则，交给file-loader进行处理
						name: "images/[name].[hash:5].[ext]"
					}
				}]
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader"
					},
					{
						loader: "postcss-loader"
					},
					{
						loader: "sass-loader"
					}
				]

			},
			{

				test:/\.html$/,
				
				loader:"html-loader"
				
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: devMode ? "css/[name].css" : "css/[name].[hash].css",
			chunkFilename: devMode ? "[id].css" : "[id].[hash].css",
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "../public/index.html"),
			title: require("../package.json").name
		}),
		new CopyPlugin({
			patterns: [
				{ from: "./public" }
			]
		})
	]
};
