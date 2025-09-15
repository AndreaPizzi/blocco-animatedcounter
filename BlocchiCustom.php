acf_register_block_type(array(
				'name'				=> 'counterpublifarm',
				'title'				=> 'Blocco Animated Counter',
				'description'		=> 'Blocco Animated Counter',
				'render_callback'	=> array( $this, 'acf_blocchi_callback'),
				'category'			=> 'publifarm_singoli',
				'keywords'			=> array( 'link', 'home' ),
				'enqueue_style'     => get_template_directory_uri(). '/blocks/style/counter.css',
				'enqueue_script' 	=> get_template_directory_uri() . '/blocks/scripts/counter.js',
				//'supports'			=> ['mode'=> false],
				'mode' => 'edit'
			));
