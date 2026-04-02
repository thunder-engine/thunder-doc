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
|    :ref:`Vector4<api_Vector4>` | :ref:`border<api_Sprite_0c85914d>` () const                    |
+--------------------------------+----------------------------------------------------------------+
|    :ref:`Vector4<api_Vector4>` | :ref:`bounds<api_Sprite_8fdbc17a>` () const                    |
+--------------------------------+----------------------------------------------------------------+
|        :ref:`Mesh<api_Mesh>` * | :ref:`mesh<api_Sprite_fec2019a>` () const                      |
+--------------------------------+----------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`pivot<api_Sprite_a9653b4e>` () const                     |
+--------------------------------+----------------------------------------------------------------+
|                          float | :ref:`pixelsPerUnit<api_Sprite_f02bd4c7>` () const             |
+--------------------------------+----------------------------------------------------------------+
|                           void | :ref:`setBorder<api_Sprite_d4f06a7b>` (const Vector4 & border) |
+--------------------------------+----------------------------------------------------------------+
|                           void | :ref:`setBounds<api_Sprite_d4e7c0ba>` (const Vector4 & bounds) |
+--------------------------------+----------------------------------------------------------------+
|                           void | :ref:`setPivot<api_Sprite_0ef6a283>` (const Vector2 & pivot)   |
+--------------------------------+----------------------------------------------------------------+
|                           void | :ref:`setPixelsPerUnit<api_Sprite_de7fa12c>` (float  pixels)   |
+--------------------------------+----------------------------------------------------------------+
|                           void | :ref:`setTexture<api_Sprite_930b182c>` (Texture * texture)     |
+--------------------------------+----------------------------------------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`texture<api_Sprite_3d0914fe>` () const                   |
+--------------------------------+----------------------------------------------------------------+



.. _api_Sprite_static:

Static Methods
--------------

None

.. _api_Sprite_methods:

Methods Description
-------------------

.. _api_Sprite_0c85914d:

 :ref:`Vector4<api_Vector4>`  **Sprite::border** () const

Returns the border sizes of the Sprite.

X=left, Y=bottom, Z=right, W=top.

**See also** setBorder().

----

.. _api_Sprite_8fdbc17a:

 :ref:`Vector4<api_Vector4>`  **Sprite::bounds** () const

Returns bounds of the Sprite.

**See also** setBounds().

----

.. _api_Sprite_fec2019a:

 :ref:`Mesh<api_Mesh>` * **Sprite::mesh** () const

Returns a mesh which represents the sprite.

----

.. _api_Sprite_a9653b4e:

 :ref:`Vector2<api_Vector2>`  **Sprite::pivot** () const

Returns pivot point of the Sprite.

**See also** setPivot().

----

.. _api_Sprite_f02bd4c7:

 float **Sprite::pixelsPerUnit** () const

Returns pixels per unit to create sprite meshes.

**See also** setPixelsPerUnit().

----

.. _api_Sprite_d4f06a7b:

 void **Sprite::setBorder** (:ref:`Vector4<api_Vector4>` & *border*)

Sets new *border* sizes for the Sprite.

**See also** border().

----

.. _api_Sprite_d4e7c0ba:

 void **Sprite::setBounds** (:ref:`Vector4<api_Vector4>` & *bounds*)

Sets *bounds* of the Sprite.

**See also** bounds().

----

.. _api_Sprite_0ef6a283:

 void **Sprite::setPivot** (:ref:`Vector2<api_Vector2>` & *pivot*)

Sets new *pivot* point for the Sprite.

**See also** pivot().

----

.. _api_Sprite_de7fa12c:

 void **Sprite::setPixelsPerUnit** (float  *pixels*)

Sets *pixels* per unit to create sprite meshes.

**See also** pixelsPerUnit().

----

.. _api_Sprite_930b182c:

 void **Sprite::setTexture** (:ref:`Texture<api_Texture>` * *texture*)

Sets a new sprite texture.

**See also** texture().

----

.. _api_Sprite_3d0914fe:

 :ref:`Texture<api_Texture>` * **Sprite::texture** () const

Returns a sprite texture.

**See also** setTexture().


