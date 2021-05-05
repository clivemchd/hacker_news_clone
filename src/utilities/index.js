import { protocol, sub_domain, domain, api_version } from 'envConfig.json';

/**
 * This provides the base url to hit an api call on, configured in env config.  
 * @returns - returns the base http url set in env-config - example : https://abc.com/v1
 */
const getBaseHttpUrl = () => {
	return `${protocol}://${sub_domain}.${domain}/${api_version}`
}

/**
 * Checks if object is defined at every level in the path provided
 * @param {object} obj - The object to check
 * @param {string} path  - The path inside the object to check. eg: "partner_configuration.oauth_service.url"
 */
 const isDefined = (obj, path) =>{
	let pathArr = path.split(".");
	let newObj = { ...obj };
	return pathArr.every((elem, index) => {
		newObj = newObj[pathArr[index]];
		return newObj;
	});
}

export {
	getBaseHttpUrl,
	isDefined
}