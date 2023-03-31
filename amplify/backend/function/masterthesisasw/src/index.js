

/* @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(event);
    const participantId = event.pathParameters.participantId;
    const survey = {'participantId': participantId, 'participantName': "participant" + participantId}
    const response = {
        statusCode: 200,
        //uncomand
        headers: {
          "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(survey),
    }
    return response;

    };
