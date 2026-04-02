.. _api_Sprite:

Sprite
======

Inherited: None

.. _api_Sprite_description:

Description
-----------

Sprites usually used in games to display environment and characters in 2D games.



.. _api_Sprite_public:

Public Methods
--------------

+--------------------------------+----------------------------------------------------------------+
|    :ref:`Vector4<api_Vector4>` | :ref:`border<api_Sprite_5d30167e>` () const                    |
+--------------------------------+----------------------------------------------------------------+
|    :ref:`Vector4<api_Vector4>` | :ref:`bounds<api_Sprite_643d10c9>` () const                    |
+--------------------------------+----------------------------------------------------------------+
|        :ref:`Mesh<api_Mesh>` * | :ref:`mesh<api_Sprite_01f5e49a>` () const                      |
+--------------------------------+----------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`pivot<api_Sprite_0e5432f6>` () const                     |
+--------------------------------+----------------------------------------------------------------+
|                          float | :ref:`pixelsPerUnit<api_Sprite_0e79dc61>` () const             |
+--------------------------------+----------------------------------------------------------------+
|                           void | :ref:`setBorder<api_Sprite_e0ba5cd2>` (const Vector4 & border) |
+--------------------------------+----------------------------------------------------------------+
|                           void | :ref:`setBounds<api_Sprite_cd56a91e>` (const Vector4 & bounds) |
+--------------------------------+----------------------------------------------------------------+
|                           void | :ref:`setPivot<api_Sprite_cf0a6918>` (const Vector2 & pivot)   |
+--------------------------------+----------------------------------------------------------------+
|                           void | :ref:`setPixelsPerUnit<api_Sprite_f3be6120>` (float  pixels)   |
+--------------------------------+----------------------------------------------------------------+
|                           void | :ref:`setTexture<api_Sprite_a0831ec2>` (Texture * texture)     |
+--------------------------------+----------------------------------------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`texture<api_Sprite_1b376cd5>` () const                   |
+--------------------------------+----------------------------------------------------------------+



.. _api_Sprite_static:

Static Methods
--------------

None

.. _api_Sprite_methods:

Methods Description
-------------------

.. _api_Sprite_5d30167e:

 :ref:`Vector4<api_Vector4>`  **Sprite::border** () const

Returns the border sizes of the Sprite.

X=left, Y=bottom, Z=right, W=top.

**See also** setBorder().

----

.. _api_Sprite_643d10c9:

 :ref:`Vector4<api_Vector4>`  **Sprite::bounds** () const

Returns bounds of the Sprite.

**See also** setBounds().

----

.. _api_Sprite_01f5e49a:

 :ref:`Mesh<api_Mesh>` * **Sprite::mesh** () const

Returns a mesh which represents the sprite.

----

.. _api_Sprite_0e5432f6:

 :ref:`Vector2<api_Vector2>`  **Sprite::pivot** () const

Returns pivot point of the Sprite.

**See also** setPivot().

----

.. _api_Sprite_0e79dc61:

 float **Sprite::pixelsPerUnit** () const

Returns pixels per unit to create sprite meshes.

**See also** setPixelsPerUnit().

----

.. _api_Sprite_e0ba5cd2:

 void **Sprite::setBorder** (:ref:`Vector4<api_Vector4>` & *border*)

Sets new *border* sizes for the Sprite.

**See also** border().

----

.. _api_Sprite_cd56a91e:

 void **Sprite::setBounds** (:ref:`Vector4<api_Vector4>` & *bounds*)

Sets *bounds* of the Sprite.

**See also** bounds().

----

.. _api_Sprite_cf0a6918:

 void **Sprite::setPivot** (:ref:`Vector2<api_Vector2>` & *pivot*)

Sets new *pivot* point for the Sprite.

**See also** pivot().

----

.. _api_Sprite_f3be6120:

 void **Sprite::setPixelsPerUnit** (float  *pixels*)

Sets *pixels* per unit to create sprite meshes.

**See also** pixelsPerUnit().

----

.. _api_Sprite_a0831ec2:

 void **Sprite::setTexture** (:ref:`Texture<api_Texture>` * *texture*)

Sets a new sprite texture.

**See also** texture().

----

.. _api_Sprite_1b376cd5:

 :ref:`Texture<api_Texture>` * **Sprite::texture** () const

Returns a sprite texture.

**See also** setTexture().


