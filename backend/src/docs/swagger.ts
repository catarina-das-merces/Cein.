import { Express } from "express";
import swaggerJSDoc, { Options } from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
export default function SetupSwagger(app: Express) {
	const options: Options = {
		definition: {
			openapi: "3.0.0",
			info: {
				title: "API doc - store",
				version: "1.0.0",
			},
			components: {
				securitySchemes: {
					bearerAuth: {
						type: "http",
						scheme: "bearer",
						bearerFormat: "JWT",
					},
				},
				schemas: {
					UserInput: {
						type: `object`,
						properties: {
							name: { type: `string` },
							email: { type: `string`, format: `email` },
							password: { type: `string`, format: `password` },
							avatar: { type: `string` },
							role: { type: `string` },
							isActive: { type: `boolean` },
						},
						required: [`name`, `email`, `password`, `role`],
					},
					User: {
						type: `object`,
						properties: {
							id: { type: `integer` },
							name: { type: `string` },
							email: { type: `string`, format: `email` },
							avatar: { type: `string` },
							role: { type: `string`, enum: [`USER`, `ADMIN`] },
							isActive: { type: `boolean` },
						},
						required: [`id`, `name`, `email`, `role`],
					},
					Product: {
						type: `object`,
						properties: {
							id: { type: `integer` },
							title: { type: `string` },
							price: { type: `number` },
							description: { type: `string` },
							category: { type: `string` },
							variation: { type: `string` },
							image: { type: `string` },
							rating: {
								type: `object`,
								properties: {
									rate: { type: `number` },
									count: { type: `integer` },
								},
							},
						},
						required: [
							`id`,
							`title`,
							`price`,
							`description`,
							`category`,
							`variation`,
							`image`,
						],
					},
					ProductInput: {
						type: `object`,
						properties: {
							title: { type: `string` },
							price: { type: `number` },
							description: { type: `string` },
							category: { type: `string` },
							variation: { type: `string` },
							image: { type: `string` },
						},
						required: [
							`title`,
							`price`,
							`description`,
							`category`,
							`variation`,
							`image`,
						],
					},
				},
			},
		},
		apis: ["./src/**/*.ts"],
	};
	const specs = swaggerJSDoc(options);
	app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
}

//http://127.0.0.1:3000/api-docs/#/Users/post_auth_register
