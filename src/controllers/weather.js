const responseFormatter = require('../utils/responseFormatter');
const weather = require('../models/Weather');

/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: Object
 *      required:
 *        - description
 *      properties:
 *        id:
 *          type: string
 *          description: auto generated unique identifier
 *        description:
 *          type: string
 *          description: description of the task
 *        done:
 *          type: boolean
 *          description: status of the task
 *      example:
 *        id: 1
 *        description: task No.1
 *        done: false
 *
 */

/**
 * @swagger
 * /api/weather:
 *   get:
 *    summary: Finds all related weather
 *    tags: [Weathers]
 *    parameters:
 *      - name: City
 *        in: query
 *        description: City name
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Successfully get data
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Task'
 *
 */
function getWeather(req, res, next) {
  const { city } = req.params;

  weather
    .getData(city)
    .then((response) => responseFormatter(res, 200, null, response))
    .catch((err) => next(err));
}

module.exports = { getWeather };
