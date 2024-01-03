.. _api_Image:

Image Class
===========

Inherited: :doc:`Widget<api_Widget>`

.. _api_Image_description:

Description
-----------



.. _api_Image_public:

Public Methods
--------------

+----------------------------------+-----------------------------------------------------------------+
|      :ref:`Vector4<api_Vector4>` | :ref:`color<api_Image_color>` () const                          |
+----------------------------------+-----------------------------------------------------------------+
|                              int | :ref:`drawMode<api_Image_drawMode>` () const                    |
+----------------------------------+-----------------------------------------------------------------+
|                      std::string | :ref:`item<api_Image_item>` () const                            |
+----------------------------------+-----------------------------------------------------------------+
|  :ref:`Material<api_Material>` * | :ref:`material<api_Image_material>` () const                    |
+----------------------------------+-----------------------------------------------------------------+
|                             void | :ref:`setColor<api_Image_setColor>` (const Vector4  color)      |
+----------------------------------+-----------------------------------------------------------------+
|                             void | :ref:`setDrawMode<api_Image_setDrawMode>` (int  mode)           |
+----------------------------------+-----------------------------------------------------------------+
|                             void | :ref:`setItem<api_Image_setItem>` (const std::string  item)     |
+----------------------------------+-----------------------------------------------------------------+
|                             void | :ref:`setMaterial<api_Image_setMaterial>` (Material * material) |
+----------------------------------+-----------------------------------------------------------------+
|                             void | :ref:`setSprite<api_Image_setSprite>` (Sprite * sprite)         |
+----------------------------------+-----------------------------------------------------------------+
|                             void | :ref:`setTexture<api_Image_setTexture>` (Texture * image)       |
+----------------------------------+-----------------------------------------------------------------+
|      :ref:`Sprite<api_Sprite>` * | :ref:`sprite<api_Image_sprite>` () const                        |
+----------------------------------+-----------------------------------------------------------------+



.. _api_Image_static:

Static Methods
--------------

None

.. _api_Image_methods:

Methods Description
-------------------

.. _api_Image_color:

 :ref:`Vector4<api_Vector4>` **Image::color** () const

Returns the color of the image to be drawn.

**See also** setColor().

----

.. _api_Image_drawMode:

 int **Image::drawMode** () const

Returns a draw mode for the image. Please check Image::DrawMode for more details.

**See also** setDrawMode().

----

.. _api_Image_item:

 std::string **Image::item** () const

Returns the current item name of sprite from the sprite sheet.

**See also** setItem().

----

.. _api_Image_material:

 :ref:`Material<api_Material>`* **Image::material** () const

Returns an instantiated Material assigned to Image.

**See also** setMaterial().

----

.. _api_Image_setColor:

 void **Image::setColor** (:ref:`Vector4<api_Vector4>`  *color*)

Changes the *color* of the image to be drawn.

**See also** *color*().

----

.. _api_Image_setDrawMode:

 void **Image::setDrawMode** (int  *mode*)

Sets a draw *mode* for the image. Please check Image::DrawMode for more details.

**See also** drawMode().

----

.. _api_Image_setItem:

 void **Image::setItem** (std::string  *item*)

Sets the current sub *item* name of sprite from the sprite sheet.

**See also** *item*().

----

.. _api_Image_setMaterial:

 void **Image::setMaterial** (:ref:`Material<api_Material>` * *material*)

Creates a new instance of *material* and assigns it.

**See also** *material*().

----

.. _api_Image_setSprite:

 void **Image::setSprite** (:ref:`Sprite<api_Sprite>` * *sprite*)

Replaces the current *sprite* with a new one.

**See also** *sprite*().

----

.. _api_Image_setTexture:

 void **Image::setTexture** (:ref:`Texture<api_Texture>` * *image*)

Replaces the current *image* with a new one.

----

.. _api_Image_sprite:

 :ref:`Sprite<api_Sprite>`* **Image::sprite** () const

Returns the sprite assigned to the Image.

**See also** setSprite().


