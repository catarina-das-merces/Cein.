import { Router } from "express";
import { check } from "express-validator";
import usersController from "../controllers/usersController.js";
import { checkRoles } from "../middlewares/authMiddleware.js";

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: API endpoints for managing users
 */

// Login user
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email: {type: string, format: email}
 *               password: {type: string}
 *             required: [email, password]
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid credentials
 */
router.post(
	"/login",
	[
		check("email").isEmail().withMessage("Invalid email."),
		check("password")
			.isLength({ min: 5, max: 10 })
			.withMessage("Invalid password"),
	],
	usersController.LoginUser
);
/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       201:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
// post new user
router.post(
	"/register",
	[
		check("name").notEmpty().withMessage("Name is required"),
		check("email").isEmail().withMessage("invalid email."),
		check("password")
			.isLength({ min: 6 })
			.withMessage("password must be at least 6 chars long"),
		//check("password").isStrongPassword,
		check("role").isIn(["USER"]).withMessage("invalid role"),
	],
	usersController.CreateUser
);
/**
 * @swagger
 * /auth/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to retrive
 *         schema:
 *          type: string
 *     responses:
 *       200:
 *         description: The user object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
// get user by ID
router.get(
	"/users/:id",
	checkRoles(["ADMIN"]),
	usersController.getAllUsersById
);

/**
 * @swagger
 * /auth/users/{id}:
 *   put:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       200:
 *         description: The user was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 */

// update user by ID
router.put("/users/:id", checkRoles(["ADMIN"]), usersController.updateUsers);

/**
 * @swagger
 * /auth/users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The user was deleted
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 */

// delete user by ID
router.delete("/users/:id", checkRoles(["ADMIN"]), usersController.deleteUser);

/**
 * @swagger
 * /auth/admin:
 *   post:
 *     summary: Admin login
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email: {type: string, format: email}
 *               password: {type: string}
 *             required: [email, password]
 *     responses:
 *       200:
 *         description: Admin login successful
 *       401:
 *         description: Invalid credentials
 */

router.post(
	"/admin",
	[
		check("email").isEmail().withMessage("Invalid email."),
		check("password")
			.isLength({ min: 5, max: 10 })
			.withMessage("Invalid password"),
	],
	checkRoles(["ADMIN"]),
	usersController.AdminLogin
);

export default router;
