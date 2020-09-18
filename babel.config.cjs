module.exports = {
	presets: ['grind'],
	plugins: [
		[
			'module-resolver',
			{
				alias: {
					App: './app',
					Boot: './boot',
				},
			},
		],
	],
}
