import { protocol, sub_domain, domain, api_version } from 'envConfig.json';

/**
 * This provides the base url to hit an api call on, configured in env config.  
 * @returns - returns the base http url set in env-config - example : https://abc.com/v1
 */
const getBaseHttpUrl = () => {
	return `${protocol}://${sub_domain}.${domain}/${api_version}`
}

export {
	getBaseHttpUrl
}