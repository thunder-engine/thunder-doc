.. _api_SpriteRender:
SpriteRender Class
================

Inherited: :ref:`Renderable<api_Renderable>`

.. _api_SpriteRender_description:
Description
-----------

The SpriteRender component allows you to display images as sprites to use in both 2D and 3D scenes.



.. _api_SpriteRender_public:
Public Methods
--------------

+---------------------------------+------------------------------------------------------------------------+
|     :ref:`Vector4<api_Vector4>` | :ref:`color<api_SpriteRender_color>` () const                          |
+---------------------------------+------------------------------------------------------------------------+
| :ref:`Material<api_Material>` * | :ref:`material<api_SpriteRender_material>` () const                    |
+---------------------------------+------------------------------------------------------------------------+
|         :ref:`Mesh<api_Mesh>` * | :ref:`mesh<api_SpriteRender_mesh>` () const                            |
+---------------------------------+------------------------------------------------------------------------+
|           :ref:`void<api_void>` | :ref:`setColor<api_SpriteRender_setColor>` (const Vector4 & color)     |
+---------------------------------+------------------------------------------------------------------------+
|           :ref:`void<api_void>` | :ref:`setMaterial<api_SpriteRender_setMaterial>` (Material * material) |
+---------------------------------+------------------------------------------------------------------------+
|           :ref:`void<api_void>` | :ref:`setTexture<api_SpriteRender_setTexture>` (Texture * texture)     |
+---------------------------------+------------------------------------------------------------------------+
|   :ref:`Texture<api_Texture>` * | :ref:`texture<api_SpriteRender_texture>` () const                      |
+---------------------------------+------------------------------------------------------------------------+

.. _api_SpriteRender_static:
Static Methods
--------------

None

.. _api_SpriteRender_methods:
Methods Description
-------------------

.. _api_SpriteRender_color:

:ref:`Vector4<api_Vector4>`  **SpriteRender::color** () const

Returns the color of the sprite to be drawn.

**See also** setColor().

----

.. _api_SpriteRender_material:

:ref:`Material<api_Material>` * **SpriteRender::material** () const

Returns an instantiated Material assigned to SpriteRender.

**See also** setMaterial().

----

.. _api_SpriteRender_mesh:

:ref:`Mesh<api_Mesh>` * **SpriteRender::mesh** () const

Returns a sprite mesh which uses to render a sprite.

----

.. _api_SpriteRender_setColor:

:ref:`void<api_void>`  **SpriteRender::setColor** (:ref:`Vector4<api_Vector4>` & *color*)

Changes the *color* of the sprite to be drawn.

**See also** *color*().

----

.. _api_SpriteRender_setMaterial:

:ref:`void<api_void>`  **SpriteRender::setMaterial** (:ref:`Material<api_Material>` * *material*)

Creates a new instance of *material* and assigns it.

**See also** *material*().

----

.. _api_SpriteRender_setTexture:

:ref:`void<api_void>`  **SpriteRender::setTexture** (:ref:`Texture<api_Texture>` * *texture*)

Replaces current *texture* with a new one.

**See also** *texture*().

----

.. _api_SpriteRender_texture:

:ref:`Texture<api_Texture>` * **SpriteRender::texture** () const

Returns a sprite texture.

**See also** setTexture().

----


