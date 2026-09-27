.. _api_Image:

Image
=====

Inherited: :ref:`Widget<api_Widget>`

.. _api_Image_description:

Description
-----------

The Image class represents an image or sprite that can be rendered and displayed on the screen within a graphical user interface (GUI). It is used to incorporate visual elements into the interface, such as icons, backgrounds, or illustrations, by loading and rendering image files.



.. _api_Image_public:

Public Methods
--------------

+----------------------------------+--------------------------------------------------------------+
|      :ref:`Vector4<api_Vector4>` | :ref:`color<api_Image_b06d4af3>` () const                    |
+----------------------------------+--------------------------------------------------------------+
|                              int | :ref:`drawMode<api_Image_dea68370>` () const                 |
+----------------------------------+--------------------------------------------------------------+
|  :ref:`Material<api_Material>` * | :ref:`material<api_Image_f7de5912>` () const                 |
+----------------------------------+--------------------------------------------------------------+
|                             void | :ref:`setColor<api_Image_9fc61be0>` (const Vector4 & color)  |
+----------------------------------+--------------------------------------------------------------+
|                             void | :ref:`setDrawMode<api_Image_04e1f59a>` (int  mode)           |
+----------------------------------+--------------------------------------------------------------+
|                             void | :ref:`setMaterial<api_Image_689517e4>` (Material * material) |
+----------------------------------+--------------------------------------------------------------+
|                             void | :ref:`setSprite<api_Image_83261075>` (Sprite * sprite)       |
+----------------------------------+--------------------------------------------------------------+
|                             void | :ref:`setTexture<api_Image_cd16a4f0>` (Texture * image)      |
+----------------------------------+--------------------------------------------------------------+
|      :ref:`Sprite<api_Sprite>` * | :ref:`sprite<api_Image_e3c51870>` () const                   |
+----------------------------------+--------------------------------------------------------------+



.. _api_Image_static:

Static Methods
--------------

None

.. _api_Image_methods:

Methods Description
-------------------

.. _api_Image_b06d4af3:

 :ref:`Vector4<api_Vector4>`  **Image::color** () const

Returns the color of the image to be drawn.

**See also** setColor().

----

.. _api_Image_dea68370:

 int **Image::drawMode** () const

Returns a draw mode for the image. Please check Image::DrawMode for more details.

**See also** setDrawMode().

----

.. _api_Image_f7de5912:

 :ref:`Material<api_Material>` * **Image::material** () const

Returns an instantiated Material assigned to Image.

**See also** setMaterial().

----

.. _api_Image_9fc61be0:

 void **Image::setColor** (:ref:`Vector4<api_Vector4>` & *color*)

Changes the *color* of the image to be drawn.

**See also** color().

----

.. _api_Image_04e1f59a:

 void **Image::setDrawMode** (int  *mode*)

Sets a draw *mode* for the image. Please check Image::DrawMode for more details.

**See also** drawMode().

----

.. _api_Image_689517e4:

 void **Image::setMaterial** (:ref:`Material<api_Material>` * *material*)

Creates a new instance of *material* and assigns it.

**See also** material().

----

.. _api_Image_83261075:

 void **Image::setSprite** (:ref:`Sprite<api_Sprite>` * *sprite*)

Replaces the current *sprite* with a new one.

**See also** sprite().

----

.. _api_Image_cd16a4f0:

 void **Image::setTexture** (:ref:`Texture<api_Texture>` * *image*)

Replaces the current *image* with a new one.

----

.. _api_Image_e3c51870:

 :ref:`Sprite<api_Sprite>` * **Image::sprite** () const

Returns the sprite assigned to the Image.

**See also** setSprite().


